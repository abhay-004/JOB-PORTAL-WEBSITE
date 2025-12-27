import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

const isResume = true;
const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 py-8">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <Avatar className={"w-24 h-24"}>
              <AvatarImage src="https://imgs.search.brave.com/CU07Rj_DG26UH49RAQB93d0qf0dTvkraUQ_7df5Oruc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTY1LzgxNi9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1mcmVlLXBuZy5w/bmc" />
            </Avatar>
            <div>
              <h1 className="font-medium text-lg">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className={"text-right cursor-pointer mr-2"}
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5 mx-2">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="mx-2">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {user?.profile?.skills ? (
              (typeof user.profile.skills === "string"
                ? user.profile.skills
                    .replace(/[[\]]/g, "") // ❌ remove [ ]
                    .split(",")
                : user.profile.skills
              ).map((item, index) => (
                <Badge key={index}>{item.replace(/"/g, "").trim()}</Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full mx-2 maw-w-sm items-center gap-1.5">
          <Label className={"text-md font-bold"}>Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href="#"
              className="text-blue-500  w-full hover:underline cursor-pointer"
            >
              Resume
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
        <div className="max-w-4xl mx-2 bg-white rounded-2xl">
          <h1 className="text-center font-bold text-lg my-5">Applied Jobs</h1>
          {/* Application table */}
          <AppliedJobTable />
        </div>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
