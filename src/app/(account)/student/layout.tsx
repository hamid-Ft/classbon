import { ReactNode } from "react";

const StudentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <aside className="bg-gray-300 flex justify-center items-center w-80">
        Student Courses Sidebar
      </aside>
      <main className="flex justify-center items-center w-full">
        {children}
      </main>
    </>
  );
};

export default StudentLayout;
