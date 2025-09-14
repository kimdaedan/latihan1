import Link from "next/link";

export default function Profile() {
  return (
    <main className="p-6 font-sans">
      <h1 className="text-2xl font-bold">My Profile</h1>
      <p className="mt-2">Nama: Didan Naufal Sirodjuddin</p>
      <p>NIM: 3312411012</p>
      <p>Jurusan: Teknik Informatika</p>
      {/* Benar: Komponen <Link> juga menggunakan huruf kapital */}
      <Link href="/" className="text-blue-500 hover:underline">Kembali ke Home</Link>
    </main>
  );
}