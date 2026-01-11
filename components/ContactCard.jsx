export default function ContactCard({ title, href, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-slate-800/70 backdrop-blur rounded-xl p-6 shadow-lg
                 flex flex-col items-center justify-center
                 transition transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl
                 aspect-square w-32"
    >
      <Icon className="text-blue-400 w-12 h-12 mb-2 flex-shrink-0" />
      <h3 className="text-lg font-semibold text-white text-center">{title}</h3>
    </a>
  );
}
