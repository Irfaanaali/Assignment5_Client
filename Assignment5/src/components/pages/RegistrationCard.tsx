import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CardWithFormReg() {
  return (
    <Card className="w-[350px] mx-auto my-72 p-4">
      <CardHeader>
        <CardTitle className="mx-auto text-4xl text-red-300 font-bold">
          REGISTRATION
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">User Name</Label>
              <Input id="name" placeholder="Enter Your User Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input type="email" id="email" placeholder="Enter Your Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input
                type="password"
                id="name"
                placeholder="Enter Your Password"
              />
            </div>
          </div>
          <CardFooter className="flex justify-between mt-4">
            <Button className="w-full">Register</Button>
          </CardFooter>
        </form>
        <div className="w-full ">
          <p className="text-center">
            {" "}
            Please
            <Link to={"/login"} className="text-red-300">
              {" "}
              Login
            </Link>{" "}
            your account
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
