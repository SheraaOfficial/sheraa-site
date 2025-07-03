-- Insert sample founder stories for YoungFounderSpotlight
INSERT INTO public.founder_stories (
  user_id, name, age, company, description, story_content, video_url, thumbnail_url,
  stats, achievements, category, hashtags, likes_count, comments_count, shares_count,
  is_featured, is_published, published_at
) VALUES 
-- Story 1: EdTech Founder
(
  '00000000-0000-0000-0000-000000000001',
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
  '00000000-0000-0000-0000-000000000002',
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
  '00000000-0000-0000-0000-000000000003',
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
  '00000000-0000-0000-0000-000000000004',
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
  '00000000-0000-0000-0000-000000000005',
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

-- Insert sample young entrepreneur profiles for peer matching
INSERT INTO public.young_entrepreneur_profiles (
  user_id, university, study_field, graduation_year, entrepreneurship_experience,
  interests, skills, goals, progress_data
) VALUES 
(
  '00000000-0000-0000-0000-000000000001',
  'American University of Sharjah', 'Computer Science', 2025, 'advanced',
  ARRAY['edtech', 'AI', 'machine learning', 'education'],
  ARRAY['Python', 'React', 'AI/ML', 'Product Design', 'Public Speaking'],
  ARRAY['Scale across GCC', 'Raise Series A', 'Hire 20+ team members'],
  '{"challenges_completed": 8, "ideas_validated": 3, "peer_matches": 12, "last_active": "2024-01-15"}'
),
(
  '00000000-0000-0000-0000-000000000002',
  'University of Sharjah', 'Environmental Engineering', 2024, 'intermediate',
  ARRAY['sustainability', 'circular economy', 'environmental tech'],
  ARRAY['3D Design', 'Engineering', 'Marketing', 'Sustainability'],
  ARRAY['Expand to Saudi Arabia', 'Partner with government', 'Launch B2B platform'],
  '{"challenges_completed": 5, "ideas_validated": 2, "peer_matches": 8, "last_active": "2024-01-14"}'
),
(
  '00000000-0000-0000-0000-000000000003',
  'American University of Sharjah', 'Graphic Design', 2024, 'advanced',
  ARRAY['design', 'typography', 'creative tech', 'digital art'],
  ARRAY['Adobe Creative Suite', 'UI/UX', 'Typography', 'Branding'],
  ARRAY['Launch font marketplace', 'Teach design workshops', 'Expand to Latin fonts'],
  '{"challenges_completed": 12, "ideas_validated": 5, "peer_matches": 15, "last_active": "2024-01-15"}'
);

-- Insert sample challenge participations for ChallengeFeed
INSERT INTO public.challenge_participations (
  user_id, challenge_id, challenge_title, challenge_type, status, score, rank,
  submission_data, registered_at, submitted_at, completed_at
) VALUES 
-- Weekly Pitch Challenge
(
  '00000000-0000-0000-0000-000000000001',
  'weekly_pitch_jan_2024', 'Weekly Pitch Challenge - EdTech Solutions', 'weekly',
  'completed', 95, 1,
  '{"pitch_video": "video_url", "deck_slides": 12, "feedback_score": 4.8}',
  NOW() - INTERVAL '3 days', NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day'
),
-- Monthly Innovation Challenge
(
  '00000000-0000-0000-0000-000000000002',
  'monthly_innovation_jan_2024', 'Monthly Innovation Challenge - Sustainability', 'monthly',
  'submitted', 87, 3,
  '{"solution_description": "Plastic recycling innovation", "prototype_images": ["img1", "img2"], "impact_metrics": {"plastic_reduced": "5 tons"}}',
  NOW() - INTERVAL '2 weeks', NOW() - INTERVAL '2 days', NULL
),
-- Hackathon Challenge
(
  '00000000-0000-0000-0000-000000000003',
  'design_hackathon_2024', '48-Hour Design Hackathon', 'hackathon',
  'completed', 92, 2,
  '{"team_size": 4, "final_prototype": "figma_link", "presentation_time": "5_minutes"}',
  NOW() - INTERVAL '1 week', NOW() - INTERVAL '3 days', NOW() - INTERVAL '3 days'
),
-- Networking Challenge (Active)
(
  '00000000-0000-0000-0000-000000000001',
  'networking_feb_2024', 'February Networking Challenge', 'networking',
  'in_progress', 0, NULL,
  '{"connections_made": 5, "target_connections": 20, "linkedin_posts": 3}',
  NOW() - INTERVAL '5 days', NULL, NULL
),
-- Upcoming Monthly Challenge
(
  '00000000-0000-0000-0000-000000000002',
  'fintech_challenge_feb_2024', 'FinTech Innovation Challenge', 'monthly',
  'registered', 0, NULL,
  '{}',
  NOW() - INTERVAL '1 day', NULL, NULL
);

-- Insert sample idea validator sessions
INSERT INTO public.idea_validator_sessions (
  user_id, idea_title, idea_description, target_market, problem_statement,
  solution_description, responses, score, feedback, completed_at
) VALUES 
(
  '00000000-0000-0000-0000-000000000001',
  'AI Study Buddy', 'Personal AI tutor that adapts to student learning style',
  'University students in UAE struggling with STEM subjects',
  'Students need personalized help but tutoring is expensive and not always available',
  'AI-powered chatbot that provides 24/7 tutoring, adapts to learning pace, tracks progress',
  '{"market_validation": 9, "technical_feasibility": 8, "business_model": 7, "competition_analysis": 8}',
  80, 'Strong market need and technical approach. Consider pricing strategy for students.',
  NOW() - INTERVAL '1 week'
),
(
  '00000000-0000-0000-0000-000000000002',
  'Campus Food Delivery', 'On-demand food delivery within university campuses',
  'Hungry students who want food delivered to their dorms/study areas',
  'Limited food options on campus, long queues during peak hours',
  'Mobile app connecting students with campus restaurants for quick delivery',
  '{"market_validation": 6, "technical_feasibility": 9, "business_model": 5, "competition_analysis": 4}',
  60, 'Easy to build technically but crowded market. Need unique differentiation.',
  NOW() - INTERVAL '3 days'
);