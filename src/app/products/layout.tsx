
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
        {children}
        <footer>
          <p>�� 2022 My Website. All rights reserved.</p>
        </footer>
    </div>
  );
}
