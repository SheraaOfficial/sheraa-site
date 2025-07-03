-- Create sample founder stories without user_id references (for demo purposes)
-- We'll use a special approach to insert data without auth.users dependency

-- First, let's create founder stories with a placeholder user_id that we'll update
-- We need to temporarily disable foreign key checks or use existing data structure

-- Insert sample founder stories for YoungFounderSpotlight
INSERT INTO public.founder_stories (
  user_id, name, age, company, description, story_content, video_url, thumbnail_url,
  stats, achievements, category, hashtags, likes_count, comments_count, shares_count,
  is_featured, is_published, published_at
) VALUES 
-- Story 1: EdTech Founder
(
  gen_random_uuid(),
  'Sarah Ahmed', 22, 'LearnForward',
  'Building AI-powered tutoring platform for UAE students',
  'Started coding at 14, now helping thousands of students across the Emirates excel in STEM subjects through personalized AI tutoring.',
  'https://sample-video-1.mp4',
  '/lovable-uploads/5ab0dc9b-b752-42ff-ab16-a2c51a0ee68e.png',
  '{"revenue": "AED 150K", "users": "2.5K students", "funding": "AED 500K", "team_size": "5"}',
  ARRAY['Top 3 EdTech UAE 2024', 'AUS Innovation Award', '500+ students helped'],
  'EdTech',
  ARRAY['#edtech', '#AI', '#tutoring', '#UAE', '#students', '#innovation'],
  1247, 89, 156,
  true, true, NOW() - INTERVAL '2 weeks'
),
-- Story 2: Sustainability Focus
(
  gen_random_uuid(),
  'Ahmed Al Mansouri', 21, 'GreenCycle',
  'Turning plastic waste into 3D printing filament',
  'Frustrated by plastic waste in Sharjah, I created a machine that converts bottles into high-quality 3D printing material. Now scaling across the GCC.',
  'https://sample-video-2.mp4',
  '/lovable-uploads/67019a34-88c0-4c00-ba3f-2e89761a0678.png',
  '{"revenue": "AED 85K", "users": "150 makers", "funding": "AED 200K", "team_size": "3"}',
  ARRAY['Sustainability Award 2024', 'GITEX Future Stars', 'Recycled 50K bottles'],
  'Sustainability',
  ARRAY['#sustainability', '#recycling', '#3dprinting', '#environmental', '#UAE'],
  892, 67, 98,
  true, true, NOW() - INTERVAL '1 week'
),
-- Story 3: Creative Economy
(
  gen_random_uuid(),
  'Fatima Al Zahra', 20, 'ArabicType',
  'Modern Arabic fonts for digital creators',
  'Noticed lack of beautiful Arabic typography online. Created 50+ modern Arabic fonts now used by top brands across MENA region.',
  'https://sample-video-3.mp4',
  '/lovable-uploads/1461e9a9-fd41-4085-86e1-6765d0fd4f59.png',
  '{"revenue": "AED 320K", "users": "5K designers", "funding": "AED 750K", "team_size": "7"}',
  ARRAY['Design Award Winner', 'Featured in Adobe', '1M+ downloads'],
  'Creative Economy',
  ARRAY['#design', '#typography', '#arabic', '#creative', '#fonts', '#mena'],
  2156, 134, 267,
  true, true, NOW() - INTERVAL '5 days'
),
-- Story 4: FinTech
(
  gen_random_uuid(),
  'Omar Khalil', 23, 'PayEasy',
  'Digital wallet for university students',
  'Built a campus payment system at UOS. Students can pay for food, books, parking with one app. Now expanding to 10+ universities.',
  'https://sample-video-4.mp4',
  '/lovable-uploads/91a7f993-9696-46a1-96a7-59d67803f50f.png',
  '{"revenue": "AED 95K", "users": "8K students", "funding": "AED 400K", "team_size": "4"}',
  ARRAY['Best Student App 2024', 'UOS Innovation Prize', '50K+ transactions'],
  'FinTech',
  ARRAY['#fintech', '#students', '#payments', '#university', '#mobile'],
  1456, 78, 123,
  false, true, NOW() - INTERVAL '3 days'
),
-- Story 5: AgriTech
(
  gen_random_uuid(),
  'Maryam Hassan', 22, 'SmartFarm',
  'IoT sensors for urban farming in UAE',
  'Helping UAE achieve food security through smart indoor farming. Our sensors optimize water, nutrients, and lighting for 300% higher yields.',
  'https://sample-video-5.mp4',
  '/lovable-uploads/c685b8f9-faed-488e-aa6e-2d85cf6191f1.png',
  '{"revenue": "AED 180K", "users": "120 farms", "funding": "AED 1.2M", "team_size": "6"}',
  ARRAY['AgriTech Innovation Award', 'SRTIP Grant Winner', '40% water savings'],
  'AgriTech',
  ARRAY['#agritech', '#IoT', '#foodsecurity', '#smartfarming', '#UAE'],
  987, 92, 145,
  true, true, NOW() - INTERVAL '1 day'
);