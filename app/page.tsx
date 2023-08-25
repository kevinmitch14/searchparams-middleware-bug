export default function Home(props: any) {
  console.log(props);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(props)}
    </main>
  );
}
