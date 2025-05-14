import { Button } from "../../components/ui/button";
import { Edit, LogOut, RefreshCcw } from "lucide-react";
import { useUserStore } from "../../stores/user.store";
import { useProfileStore } from "../../stores/profile.store";
import { useEffect } from "react";
import { logout } from "../../utils/auth.helper";

interface ProfileCardProps {
  onEdit: () => void;
}

const ProfileCard = ({ onEdit }: ProfileCardProps) => {
  const { user, loading, error, getUser } = useUserStore();
  const { profile, getProfile } = useProfileStore();

  const fetchData = async () => {
    getUser();
    getProfile();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 text-center text-gray-500">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 text-center text-red-600 space-y-4">
        <p>{error}</p>
        <Button
          onClick={fetchData}
          className="gap-2 border-gray-200 hover:bg-gray-200"
        >
          <RefreshCcw className="h-4 w-4" />
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Profile Information
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={onEdit}
            className="flex items-center gap-2 border-gray-200 hover:bg-blue-200"
          >
            <Edit className="h-4 w-4" />
            Edit Profile
          </Button>
          <Button
            variant="outline"
            onClick={logout}
            className="flex items-center gap-2 border-gray-200 hover:bg-blue-200"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-3xl font-bold mx-auto mb-3">
              {user?.fullname
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </div>
            <h3 className="text-xl font-semibold text-center">
              {user?.fullname}
            </h3>
            <p className="text-gray-500 text-center">@{user?.username}</p>
          </div>

          <div className="space-y-3 mt-6">
            <div>
              <span className="text-sm text-gray-500">Email</span>
              <p className="text-gray-800">{user?.email}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Phone Number</span>
              <p className="text-gray-800">{user?.phoneNumber}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <span className="text-sm text-gray-500">Bio</span>
            <p className="text-gray-800">{profile?.bio}</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Gender</span>
            <p className="text-gray-800">{profile?.gender}</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Address</span>
            <p className="text-gray-800">{profile?.address}</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Member Since</span>
            <p className="text-gray-800">
              {profile?.createdAt
                ? new Date(profile.createdAt).toLocaleDateString()
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
