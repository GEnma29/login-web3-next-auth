import React from "react";
import ClientOnly from "../containers/client-only";
import Header from "./header.component";

const CommonLayout: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  return (
    <div className="flex-col w-screen h-screen justify-center align-center ">
      <ClientOnly>
        <Header title={title} />
        {children}
      </ClientOnly>
    </div>
  );
};

export default CommonLayout;
