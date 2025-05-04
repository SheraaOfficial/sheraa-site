
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Plus } from "lucide-react";

interface AboutSectionProps {
  profile: any;
}

const AboutSection = ({ profile }: AboutSectionProps) => {
  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-3">About</h3>
          <p className="text-gray-600 whitespace-pre-line">{profile.about}</p>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-medium">Experience</h3>
            <Button variant="ghost" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
          
          {profile.experience?.length > 0 ? (
            <div className="space-y-4">
              {profile.experience.map((exp: any, index: number) => (
                <div key={index} className="border-b pb-4 last:border-none">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 bg-gray-100 rounded-md flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">{exp.position}</h4>
                      <p className="text-sm text-gray-600">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No experience added yet</p>
          )}
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-medium">Education</h3>
            <Button variant="ghost" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
          
          {profile.education?.length > 0 ? (
            <div className="space-y-4">
              {/* Education items would go here */}
              <p className="text-sm text-gray-500">No education added yet</p>
            </div>
          ) : (
            <p className="text-sm text-gray-500">No education added yet</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
