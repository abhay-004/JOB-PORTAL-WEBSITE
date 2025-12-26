import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div>
          <Link to={"/"}>
            <h1 className="text-2xl font-bold">
              Job <span className="text-[#f83002]">Portal</span>
            </h1>
          </Link>
        </div>

        {/* Right side  */}

        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/jobs"}>
              <li>Job</li>
            </Link>
            <Link to={"/browse"}>
              <li>Browse</li>
            </Link>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2 m-2">
              <Link to="/login">
                <Button variant="outline" className="cursor-pointer">
                  Login
                </Button>
              </Link>

              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] cursor-pointer">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Abhay</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit.
                    </p>
                  </div>
                </div>

                <div>
                  <Button
                    variant="link"
                    className="border-none outline-none cursor-pointer"
                  >
                    <User2 /> <Link to={"/profile"}>View Profile</Link>
                  </Button>
                  <Button
                    variant="link"
                    className="border-none outline-none cursor-pointer"
                  >
                    <LogOut /> Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
