import { AtSign, PlusIcon, X } from "lucide-react";
import { FormEvent } from "react";

interface InviteGuestsModalProps {
  toggleModal: () => void;
  handleRemoveEmail: (email: string) => void;
  handleAddEmail: (event: FormEvent<HTMLFormElement>) => void;
  emailsList: string[];
}

export function InviteGuestsModal({
  toggleModal,
  handleRemoveEmail,
  handleAddEmail,
  emailsList,
}: Readonly<InviteGuestsModalProps>) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between ">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button type="button" onClick={toggleModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p>
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
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
  );
}
