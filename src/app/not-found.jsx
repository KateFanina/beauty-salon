import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Вибачте</h1>
      <h2> Сторінка не знайдена</h2>
      <p>
        Перейти на <Link href="/"> головну</Link> сторінку
      </p>
    </div>
  );
}
