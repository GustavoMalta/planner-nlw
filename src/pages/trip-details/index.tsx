import {
  X,
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  PlusIcon,
  Settings2,
  Tag,
  User,
  UserPlus2,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationHeader } from "./destination-header";
import { Button } from "../../components/button";

export function TripDetails() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  const toggleActivityModal = () => {
    setIsCreateActivityModalOpen((prev) => !prev);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCreateActivityModalOpen(false);
  };

  const { tripId } = useParams();
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-16 h-10">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <Button onClick={toggleActivityModal}>
              <Plus className="size-5" /> Cadastrara atividade
            </Button>
          </div>
          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="w-full h-px bg-zinc-800" />

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          toggleActivityModal={toggleActivityModal}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
