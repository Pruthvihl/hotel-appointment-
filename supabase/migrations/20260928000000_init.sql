-- Enable pgcrypto for UUIDs
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- profiles
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  country TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- rooms
CREATE TABLE public.rooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  price_per_night NUMERIC NOT NULL,
  capacity INT NOT NULL,
  size_sqm INT,
  bed_type TEXT,
  view_type TEXT,
  amenities TEXT[],
  image_url TEXT,
  is_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.rooms ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view rooms" ON public.rooms FOR SELECT USING (true);
CREATE POLICY "Admins can manage rooms" ON public.rooms USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND (first_name = 'Admin' OR id = auth.uid())) -- Dummy admin check, should be improved
);

-- reservations
CREATE TABLE public.reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id),
  room_id UUID REFERENCES public.rooms(id),
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  guests INT NOT NULL,
  total_price NUMERIC NOT NULL,
  status TEXT DEFAULT 'pending',
  special_requests TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own reservations" ON public.reservations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create reservations" ON public.reservations FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Insert dummy data
INSERT INTO public.rooms (name, category, description, price_per_night, capacity, size_sqm, bed_type, view_type, amenities, image_url) VALUES
('The Royal Suite', 'Suite', 'Unparalleled luxury with panoramic ocean views.', 2500, 2, 120, 'King', 'Ocean View', ARRAY['Butler Service', 'Private Balcony', 'Jacuzzi'], 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop'),
('Premier Room', 'Room', 'Elegant and spacious room with modern amenities.', 800, 2, 55, 'Queen', 'City View', ARRAY['Free WiFi', 'Mini Bar', 'Espresso Machine'], 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop'),
('Presidential Villa', 'Villa', 'The ultimate exclusive experience.', 5000, 4, 300, 'King x2', 'Ocean View', ARRAY['Private Pool', 'Chef', 'Cinema Room'], 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop');
