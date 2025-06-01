
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, ArrowLeft, Mail, Lock, User, Building2, Github, Linkedin, Globe } from 'lucide-react';
import { useLocalStorage } from '@/hooks/use-local-storage';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [users, setUsers] = useLocalStorage<any[]>("users", []);
  const [loggedInUser, setLoggedInUser] = useLocalStorage<any | null>("loggedInUser", null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // Login logic
        let user = users.find(u => u.email === email && u.password === password);
        
        if (!user && email === "demo@sheraa.com" && password === "password123") {
          // Create demo user if doesn't exist
          const demoUser = {
            id: "demo-user-1",
            email: "demo@sheraa.com",
            password: "password123",
            firstName: "Demo",
            lastName: "User",
            company: "Sheraa",
            profileComplete: true,
            createdAt: new Date().toISOString(),
            profile: {
              headline: "Startup Founder & Tech Entrepreneur",
              bio: "Passionate about building products that solve real problems and connecting with fellow entrepreneurs in the Sheraa ecosystem.",
              location: "Sharjah, UAE",
              website: "https://sheraa.ae",
              industry: "Technology",
              skills: ["Product Development", "UX Design", "Entrepreneurship", "Innovation"],
              projects: [
                {
                  id: "1",
                  name: "EcoSolutions",
                  description: "Sustainable technology solutions for businesses.",
                  status: "Active"
                }
              ]
            },
            posts: [
              {
                id: "post1",
                content: "Excited to be part of the Sheraa community! Looking forward to connecting with fellow entrepreneurs and sharing our journey.",
                timestamp: new Date().toISOString(),
                likes: 12,
                comments: 3
              }
            ],
            connections: []
          };
          
          setUsers([...users, demoUser]);
          user = demoUser;
        }
        
        if (user) {
          setLoggedInUser(user);
          toast({
            title: "Welcome back!",
            description: `Welcome back, ${user.firstName}!`,
          });
          
          if (user.profileComplete) {
            navigate("/profile");
          } else {
            navigate("/profile-setup");
          }
        } else {
          toast({
            title: "Login failed",
            description: "Invalid email or password. Try demo@sheraa.com with password123",
            variant: "destructive",
          });
        }
      } else {
        // Signup logic
        if (password !== confirmPassword) {
          toast({
            title: "Password mismatch",
            description: "Passwords don't match",
            variant: "destructive",
          });
          return;
        }
        
        if (users.some(user => user.email === email)) {
          toast({
            title: "Account exists",
            description: "This email is already registered. Please login instead.",
            variant: "destructive",
          });
          return;
        }
        
        const newUser = {
          id: Date.now().toString(),
          email,
          password,
          firstName,
          lastName,
          company,
          profileComplete: false,
          createdAt: new Date().toISOString(),
          posts: [],
          connections: [],
          profile: {
            headline: "",
            bio: "",
            location: "",
            website: "",
            industry: "",
            skills: [],
            projects: []
          }
        };
        
        setUsers([...users, newUser]);
        setLoggedInUser(newUser);
        
        toast({
          title: "Account created!",
          description: "Welcome to Sheraa! Let's complete your profile.",
        });
        
        navigate("/profile-setup");
      }
    } catch (error: any) {
      toast({
        title: "Authentication Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sheraa-primary/5 via-white to-sheraa-teal/5 dark:from-sheraa-dark dark:via-sheraa-dark/80 dark:to-sheraa-dark/60 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Welcome Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="space-y-8 lg:pr-8"
        >
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-sheraa-primary">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>

          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-primary/15 to-sheraa-teal/15 border border-sheraa-primary/30"
            >
              <Building2 className="w-5 h-5 text-sheraa-primary" />
              <span className="text-sm font-bold bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Join Sharjah's Innovation Hub
              </span>
            </motion.div>

            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-sheraa-primary via-sheraa-teal to-sheraa-orange bg-clip-text text-transparent leading-tight">
              {isLogin ? 'Welcome Back' : 'Start Your Journey'}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {isLogin 
                ? 'Continue building the future with Sharjah\'s entrepreneurship ecosystem'
                : 'Join over 180+ startups and connect with mentors, investors, and fellow entrepreneurs'
              }
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: User, title: "Expert Mentorship", desc: "Connect with industry leaders" },
                { icon: Building2, title: "Startup Programs", desc: "Join our incubation programs" },
                { icon: Github, title: "Global Network", desc: "Access 140+ partners" },
                { icon: Linkedin, title: "Career Growth", desc: "Build lasting connections" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50"
                >
                  <div className="bg-sheraa-primary/10 p-2 rounded-full">
                    <benefit.icon className="h-4 w-4 text-sheraa-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{benefit.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Auth Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                {isLogin ? 'Sign In' : 'Create Account'}
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                {isLogin ? 'Welcome back to Sheraa' : 'Join the Sheraa community'}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social Login Options */}
              <div className="grid grid-cols-3 gap-3">
                <Button variant="outline" className="h-11">
                  <Google className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="h-11">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="h-11">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-gray-800 px-2 text-muted-foreground">
                    Or continue with email
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <AnimatePresence mode="wait">
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="text"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="pl-10"
                          required={!isLogin}
                        />
                      </div>
                      <Input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required={!isLogin}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isLogin && (
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Company (Optional)"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                )}
                
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>

                {!isLogin && (
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10"
                      required={!isLogin}
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sheraa-primary to-sheraa-teal hover:from-sheraa-primary/90 hover:to-sheraa-teal/90 h-11"
                  disabled={loading}
                >
                  {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
                </Button>
              </form>

              <div className="text-center space-y-4">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-sheraa-primary hover:text-sheraa-teal font-medium"
                >
                  {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                </button>

                {isLogin && (
                  <div>
                    <Link
                      to="/auth/forgot-password"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-sheraa-primary"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                )}

                {isLogin && (
                  <div className="text-xs text-gray-500 bg-sheraa-primary/5 p-3 rounded-lg">
                    <strong>Demo Account:</strong> demo@sheraa.com / password123
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;
