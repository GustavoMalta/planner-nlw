import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
  toggleEmailsModal: () => void;
  toggleConfirmModal: () => void;
  emailsList: string[];
}

export function InviteGuestsStep({
  toggleEmailsModal,
  toggleConfirmModal,
  emailsList,
}: InviteGuestsStepProps) {
  return (
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

      <Button onClick={toggleConfirmModal}>
        Confirmar viagem <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
