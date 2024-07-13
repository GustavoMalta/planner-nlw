import { FormEvent, useState } from "react";
import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  PlusIcon,
  User,
} from "lucide-react";

export function App() {
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [isModalEmailsOpen, setIsModalEmailsOpen] = useState(false);
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
  const [emailsList, setEmailsList] = useState<Array<string>>([]);

  const handleGestsOpen = () => {
    setIsGuestsOpen(!isGuestsOpen);
  };

  const toggleEmailsModal = () => {
    setIsModalEmailsOpen(!isModalEmailsOpen);
  };
  const toggleConfirmModal = () => {
    setIsModalConfirmOpen(!isModalConfirmOpen);
  };

  const handleAddEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newEmail = data.get("email")?.toString();
    if (!newEmail || emailsList.includes(newEmail)) return;

    setEmailsList([...emailsList, newEmail]);

    e.currentTarget.reset();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();
    // if (!newEmail || emailsList.includes(newEmail)) return;

    // setEmailsList([...emailsList, newEmail]);

    e.currentTarget.reset();
  };

  const handleRemoveEmail = (email: string) => {
    setEmailsList([...emailsList.filter((i) => i != email)]);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Logo" />

          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 rounded-xl px-4 flex items-center shadow-shape gap-2">
            <div className="flex flex-1 items-center gap-2">
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                placeholder="Para onde voce vai?"
                disabled={isGuestsOpen}
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40"
                placeholder="Quando?"
                disabled={isGuestsOpen}
              />
            </div>
            <div className="w-px h-6 bg-zinc-800" />

            {isGuestsOpen ? (
              <button
                className="flex items-center gap-2 hover:bg-zinc-700 bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium"
                onClick={handleGestsOpen}
              >
                Alterar local/data <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                className="flex items-center gap-2 hover:bg-lime-400 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium"
                onClick={handleGestsOpen}
              >
                Continuar <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsOpen && (
            <div className="h-16 bg-zinc-900 rounded-xl px-4 flex items-center shadow-shape gap-2">
              <button
                type="button"
                className="flex flex-1 items-center gap-2 text-left "
                onClick={toggleEmailsModal}
              >
                <UserRoundPlus className="size-5 " />
                {emailsList.length ? (
                  <span className="text-lg flex-1 text-zinc-100">
                    {emailsList.length} Pessoa(s) convidadas
                  </span>
                ) : (
                  <span className="text-lg flex-1 text-zinc-400">
                    Quem estará na viagem?
                  </span>
                )}
              </button>
              <div className="w-px h-6 bg-zinc-800" />
              <button
                className="flex items-center gap-2 hover:bg-lime-400 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium"
                onClick={toggleConfirmModal}
              >
                Confirmar viagem <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br /> com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
        </p>
      </div>

      {isModalEmailsOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between ">
                <h2 className="text-lg font-semibold">Selecionar convidados</h2>
                <button type="button" onClick={toggleEmailsModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p>
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
              </p>
            </div>

            <div className="flex flex-wrap border border-px rounded-lg border-zinc-800 w-50 gap-2 p-2">
              {emailsList.map((i) => {
                return (
                  <div
                    key={i}
                    className="py-1.5 px-2.5 rounded-md bg-zinc-800 gap-2 text-zinc-300 flex items-center"
                  >
                    <span>{i}</span>
                    <button type="button" onClick={() => handleRemoveEmail(i)}>
                      <X className="size-4 text-zinc- 400" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="w-full h-px bg-zinc-800" />

            <form
              className="h-16 bg-zinc-950 border border-zinc-800 rounded-xl px-4 flex items-center shadow-shape gap-2"
              onSubmit={handleAddEmail}
            >
              <div className="flex flex-1 items-center gap-2 text-left text-zinc-400">
                <AtSign className="size-5" />
                <input
                  type="email"
                  name="email"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  placeholder="Digite o e-mail do convidado"
                />
              </div>
              <div className="w-px h-6 bg-zinc-800" />
              <button
                type="submit"
                className="flex items-center gap-2 hover:bg-lime-400 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium"
              >
                Convidar <PlusIcon className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {isModalConfirmOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between ">
                <h2 className="text-lg font-semibold">
                  Confirmar criação da viagem
                </h2>
                <button type="button" onClick={toggleConfirmModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p>
                Para concluir a criação da viagem para{" "}
                <strong className="font-semibold text-zinc-100">
                  Florianópolis{" "}
                </strong>
                , Brasil nas datas de{" "}
                <strong className="font-semibold text-zinc-100">
                  16 a 27 de Agosto de 2024{" "}
                </strong>
                preencha seus dados abaixo:
              </p>
            </div>

            <div className="flex flex-wrap w-50 gap-2 p-2"></div>

            <div className="w-full h-px bg-zinc-800" />

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="h-14 bg-zinc-950 border border-zinc-800 rounded-xl px-4 flex items-center shadow-shape gap-2">
                <User className="size-5 text-zinc-400" />
                <input
                  type="text"
                  name="name"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="h-14 bg-zinc-950 border border-zinc-800 rounded-xl px-4 flex items-center shadow-shape gap-2">
                <AtSign className="size-5 text-zinc-400" />
                <input
                  type="email"
                  name="email"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                  placeholder="Digite seu email pessoal"
                />
              </div>
              <button
                type="submit"
                className="w-full h-11 justify-center flex items-center gap-2 hover:bg-lime-400 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium"
              >
                Confirmar criação da viagem
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
