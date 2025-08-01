
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, Mail, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Form schema
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const LoginForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [users, setUsers] = useLocalStorage<any[]>("users", []);
  const [loggedInUser, setLoggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  const onSubmit = (data: FormValues) => {
    // For demo purposes, let's add a default user if no users exist
    if (users.length === 0) {
      const defaultUser = {
        id: "default-user-1",
        email: "demo@sheraa.com",
        password: "password123",
        firstName: "Demo",
        lastName: "User",
        profileComplete: true,
        profile: {
          headline: "Startup Founder & Tech Entrepreneur",
          bio: "Passionate about building products that solve real problems.",
          location: "Sharjah, UAE",
          website: "https://example.com",
          industry: "Technology",
          expertise: ["Product Development", "UX Design", "Entrepreneurship"],
          projects: [
            {
              id: "1",
              name: "EcoSolutions",
              description: "Sustainable technology solutions for businesses.",
            }
          ]
        },
        posts: [
          {
            id: "post1",
            content: "Excited to join the Sheraa community! Looking forward to connecting with fellow entrepreneurs.",
            timestamp: new Date().toISOString(),
            likes: 12,
            comments: 3
          }
        ],
        connections: ["user2", "user3"]
      };
      
      setUsers([defaultUser]);
      toast({
        title: "Demo account created",
        description: "Use email: demo@sheraa.com and password: password123 to login",
      });
    }
    
    const user = users.find(u => u.email === data.email && u.password === data.password);
    
    if (user) {
      setLoggedInUser(user);
      toast({
        title: "Login successful!",
        description: `Welcome back, ${user.firstName}!`,
      });
      
      // Check if profile is complete
      if (user.profileComplete) {
        navigate("/profile");
      } else {
        navigate("/profile-setup");
      }
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password. Try with demo@sheraa.com and password123",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-sheraa-primary">Welcome Back</h2>
        <p className="text-muted-foreground">Enter your credentials to access your account</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="john.doe@example.com" 
                      className="pl-10" 
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="password" 
                      placeholder="********" 
                      className="pl-10" 
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex items-center justify-between">
            <Link to="/forgot-password" className="text-sm text-sheraa-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          
          <Button type="submit" className="w-full group">
            Sign In
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </Form>
      
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/signup" className="text-sheraa-primary font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
