export default function App(props: any) {
  console.log(props);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Home</h1>
      {JSON.stringify(props)}
    </main>
  );
}
