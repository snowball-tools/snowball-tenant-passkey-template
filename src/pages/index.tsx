import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // add authentification / session logic here
    router.replace("/login");
  }, [router]);
};

export default Home;
