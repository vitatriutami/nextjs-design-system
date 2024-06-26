export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div>
      <div>
        {data.map((item: any) => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
    </div>
  );
}
