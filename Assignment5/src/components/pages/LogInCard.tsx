/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
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
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { verifyToken } from "@/utils/verifyToken";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

export function CardWithForm() {
  const { register, handleSubmit } = useForm();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Logging in");
    const userInfo = {
      username: data.username,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.token);
    dispatch(setUser({ user: user, token: res.data.token }));
    toast.success("Logged in", { id: toastId, duration: 2000 });
    navigate("/dashboard");
  };
  return (
    <Card className="w-[350px] mx-auto my-72 p-4">
      <CardHeader>
        <CardTitle className="mx-auto text-4xl text-red-300 font-bold">
          LOG IN
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">User Name</Label>
              <Input
                id="username"
                placeholder="Enter Your User Name"
                {...register("username")}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input
                type="password"
                id="password"
                {...register("password")}
                placeholder="Enter Your Password"
              />
            </div>
          </div>
          <CardFooter className="flex justify-between mt-4 ">
            <Button type="submit" className="w-full ">
              Log In
            </Button>{" "}
          </CardFooter>
        </form>
        <div className="w-full">
          <p className="text-center">
            {" "}
            If don't have account
            <Link to={"/registration"} className="text-red-300">
              {" "}
              Registration
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
