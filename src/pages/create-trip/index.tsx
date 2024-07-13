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
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { PlaceAndDateStep } from "./steps/place-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";

export function CreateTripPage() {
  const navigate = useNavigate();
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [isModalEmailsOpen, setIsModalEmailsOpen] = useState(false);
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false);
  const [emailsList, setEmailsList] = useState<Array<string>>([]);

  const toggleGuestsOpen = () => {
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

  const createTrip = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/trip-details/trip_id");
    // const data = new FormData(e.currentTarget);
    // const name = data.get("name")?.toString();
    // const email = data.get("email")?.toString();
    // // if (!newEmail || emailsList.includes(newEmail)) return;

    // // setEmailsList([...emailsList, newEmail]);

    // e.currentTarget.reset();
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
          <PlaceAndDateStep
            toggleGuestsOpen={toggleGuestsOpen}
            isGuestsOpen={isGuestsOpen}
          />
          {isGuestsOpen && (
            <InviteGuestsStep
              emailsList={emailsList}
              toggleConfirmModal={toggleConfirmModal}
              toggleEmailsModal={toggleEmailsModal}
            />
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
        <InviteGuestsModal
          emailsList={emailsList}
          handleAddEmail={handleAddEmail}
          handleRemoveEmail={handleRemoveEmail}
          toggleModal={toggleEmailsModal}
        />
      )}

      {isModalConfirmOpen && (
        <ConfirmTripModal
          handleCreateTrip={createTrip}
          toggleModal={toggleConfirmModal}
        />
      )}
    </div>
  );
}
