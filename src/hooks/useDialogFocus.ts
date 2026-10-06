import { RefObject, useEffect } from "react";

const FOCUSABLE =
    'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

// Manejo de foco para superposiciones (modal, menú móvil): al abrir mueve el foco
// adentro, lo mantiene ahí con Tab, cierra con Esc y al cerrar lo devuelve al disparador.
export const useDialogFocus = (
    open: boolean,
    containerRef: RefObject<HTMLElement | null>,
    onClose: () => void
) => {
    useEffect(() => {
        if (!open) return;

        const trigger = document.activeElement as HTMLElement | null;
        const container = containerRef.current;
        container?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
                return;
            }
            if (e.key !== "Tab" || !container) return;

            const items = [
                ...container.querySelectorAll<HTMLElement>(FOCUSABLE),
            ];
            if (items.length === 0) return;
            const first = items[0];
            const last = items[items.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            trigger?.focus();
        };
    }, [open, containerRef, onClose]);
};
