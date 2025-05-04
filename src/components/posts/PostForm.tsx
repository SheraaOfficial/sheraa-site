
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage 
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useToast } from "@/hooks/use-toast";
import { Image, Link, Smile, Send } from "lucide-react";

const formSchema = z.object({
  content: z.string().min(1, "Post cannot be empty").max(1000, "Post is too long (max 1000 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

const PostForm = () => {
  const { toast } = useToast();
  const [users, setUsers] = useLocalStorage<any[]>("users", []);
  const [loggedInUser, setLoggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    if (!loggedInUser) return;
    
    setIsSubmitting(true);
    
    try {
      // Create new post
      const newPost = {
        id: Date.now().toString(),
        content: data.content,
        authorId: loggedInUser.id,
        createdAt: new Date().toISOString(),
        likes: 0,
        comments: [],
      };
      
      // Update user's posts array
      const updatedUser = {
        ...loggedInUser,
        posts: [newPost, ...(loggedInUser.posts || [])],
      };
      
      // Update in local storage
      setLoggedInUser(updatedUser);
      setUsers(users.map(user => 
        user.id === updatedUser.id ? updatedUser : user
      ));
      
      toast({
        title: "Post published!",
        description: "Your post has been published successfully.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to publish post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Share your thoughts, ideas, or ask a question..."
                  className="min-h-[120px] resize-none focus:ring-sheraa-primary"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            <Button type="button" size="sm" variant="ghost">
              <Image className="h-4 w-4 mr-1" />
              Image
            </Button>
            <Button type="button" size="sm" variant="ghost">
              <Link className="h-4 w-4 mr-1" />
              Link
            </Button>
            <Button type="button" size="sm" variant="ghost">
              <Smile className="h-4 w-4 mr-1" />
              Emoji
            </Button>
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting || !form.formState.isValid}
            className="group"
          >
            {isSubmitting ? "Publishing..." : "Publish"}
            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PostForm;
