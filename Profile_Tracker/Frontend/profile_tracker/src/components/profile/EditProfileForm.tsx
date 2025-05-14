import React, { useState, useEffect } from "react";
import type { UserFormType } from "../../types/user.type";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { toast } from "sonner";
import { Label } from "../../components/ui/label";
import { useUserStore } from "../../stores/user.store";
import { useProfileStore } from "../../stores/profile.store";
import type { ProfileFormType } from "../../types/profile.type";

interface EditProfileFormProps {
  onClose: () => void;
}

const EditProfileForm = ({ onClose }: EditProfileFormProps) => {
  const { user, error, loading, updateUser } = useUserStore();
  const { profile } = useProfileStore();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [userForm, setUserForm] = useState<UserFormType>({
    fullname: "",
    email: "",
    phoneNumber: "",
  });
  const [profileForm, setProfileForm] = useState<ProfileFormType>({
    bio: "",
    gender: "0",
    address: "",
  });

  useEffect(() => {
    if (user) {
      setUserForm({
        fullname: user.fullname || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
      });
    }

    if (profile) {
      setProfileForm({
        bio: profile.bio || "",
        gender: profile.gender || "0",
        address: profile.address || "",
      });
    }
  }, [user, profile]);

  useEffect(() => {
    if (!hasSubmitted) return;

    if (error) {
      toast.error(error);
      setHasSubmitted(false);
    } else if (!loading && !error) {
      toast.success("Profile updated successfully!");
      onClose();
      setHasSubmitted(false);
    }
  }, [loading, error, hasSubmitted]);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenderChange = (value: string) => {
    setProfileForm((prev) => ({ ...prev, gender: value === "" ? "" : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    await updateUser(userForm, profileForm);
  };

  return (
    <Card className="border-0 rounded-xl shadow-md bg-white ">
      <CardHeader className="bg-gradient-to-r  border-blue-100">
        <CardTitle className="text-xl text-black font-semibold">
          Edit Profile
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6 pt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2 group">
              <Label
                htmlFor="fullname"
                className="text-sm font-medium text-gray-700  transition-colors"
              >
                Full Name
              </Label>
              <Input
                id="fullname"
                name="fullname"
                value={userForm.fullname}
                onChange={handleUserChange}
                className="border-blue-200 focus:border-blue-400 focus:ring-blue-200 transition-all"
              />
            </div>

            <div className="space-y-2 group">
              <Label
                htmlFor="username"
                className="text-sm font-medium text-gray-700  transition-colors"
              >
                Username
              </Label>
              <Input
                id="username"
                name="username"
                value={user?.username}
                onChange={handleUserChange}
                disabled
                className="bg-gray-50 border-gray-200"
              />
            </div>

            <div className="space-y-2 group">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700  transition-colors"
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={userForm.email}
                onChange={handleUserChange}
                className="border-blue-200 focus:border-blue-400 focus:ring-blue-200 transition-all"
              />
            </div>

            <div className="space-y-2 group">
              <Label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-gray-700  transition-colors"
              >
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                value={userForm.phoneNumber}
                onChange={handleUserChange}
                className="border-blue-200 focus:border-blue-400 focus:ring-blue-200 transition-all"
              />
            </div>

            <div className="space-y-2 group">
              <Label
                htmlFor="bio"
                className="text-sm font-medium text-gray-700  transition-colors"
              >
                Bio
              </Label>
              <Textarea
                id="bio"
                name="bio"
                value={profileForm.bio}
                onChange={handleProfileChange}
                className="min-h-[110px] resize-none border-blue-200 focus:border-blue-400 focus:ring-blue-200 transition-all"
              />
            </div>

            <div className="space-y-2 group">
              <Label
                htmlFor="gender"
                className="text-sm font-medium text-gray-700  transition-colors"
              >
                Gender
              </Label>
                <Select
                  value={profileForm.gender ?? "Select gender"}
                  onValueChange={handleGenderChange}
                >
                  <SelectTrigger className="border-blue-200 focus:ring-blue-200 hover:border-blue-300 transition-all">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-blue-100 shadow-md">
                    <SelectItem value="Male" className="hover:bg-blue-50">
                      Male
                    </SelectItem>
                    <SelectItem value="Female" className="hover:bg-blue-50">
                      Female
                    </SelectItem>
                  </SelectContent>
                </Select>
            </div>

            <div className="space-y-2 md:col-span-2 group">
              <Label
                htmlFor="address"
                className="text-sm font-medium text-gray-700  transition-colors"
              >
                Address
              </Label>
              <Textarea
                id="address"
                name="address"
                value={profileForm.address}
                onChange={handleProfileChange}
                className="resize-none border-blue-200 focus:border-blue-400 focus:ring-blue-200 transition-all"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-blue-100 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 py-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="border-blue-200 hover:bg-blue-100 hover:text-blue-800 transition-all"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={loading}
            className="text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
          >
            {loading ? (
              <>
                <span className="loader border-t-transparent animate-spin w-4 h-4 rounded-full" />
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default EditProfileForm;
