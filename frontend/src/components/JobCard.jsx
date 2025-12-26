import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const JobCard = () => {
  const navigate = useNavigate();
  const jobId = "asdfhalugfaldsh";
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button
          variant="outline"
          className={"rounded-full cursor-pointer"}
          size="icon"
        >
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button>
          <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/CU07Rj_DG26UH49RAQB93d0qf0dTvkraUQ_7df5Oruc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTY1LzgxNi9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1mcmVlLXBuZy5w/bmc" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2 ">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates
          sint earum, velit iusto quae provident nemo error cumque non!
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge variant={"ghost"} className="text-blue-700 font-bold">
          12 Positions
        </Badge>
        <Badge variant={"ghost"} className="text-[#f83002] font-bold">
          Part Time
        </Badge>
        <Badge variant={"ghost"} className="text-[#7209b7] font-bold">
          24LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${jobId}`)}
          variant="outline"
          className={"cursor-pointer"}
        >
          Details
        </Button>
        <Button className={"bg-[#7209b7] cursor-pointer"}>
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
