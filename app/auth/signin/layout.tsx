import React from "react";

const layout = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
      <div>
        20% off for next few days , Adding this only in SignIn folder pages
      </div>
      {children}
    </div>
  );
};

export default layout;
