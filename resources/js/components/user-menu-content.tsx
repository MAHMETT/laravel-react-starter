import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { XLink } from '@/components/ui/xlink';
import { router } from '@inertiajs/react';
import { UserInfo } from '@/components/user-info';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { logout } from '@/routes';
import { edit } from '@/routes/profile';
import { type User } from '@/types';
import { LogOutIcon, Settings } from 'lucide-react';
import { useState } from 'react';
import { UserMenuContentProps } from '@/types/components/user-menu-content';

export function UserMenuContent({ user }: UserMenuContentProps) {
    const cleanup = useMobileNavigation();
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);

    const handleLogout = () => {
        cleanup();
        router.post(logout());
    };

    const handleConfirmLogout = () => {
        handleLogout();
        setShowConfirmDialog(false);
    };

    return (
        <>
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <UserInfo user={user} showEmail={true} />
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                    <XLink
                        className="block w-full"
                        href={edit()}
                        as="button"
                        prefetch
                        onClick={cleanup}
                    >
                        <Settings className="mr-2" />
                        Settings
                    </XLink>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
                <Dialog
                    open={showConfirmDialog}
                    onOpenChange={setShowConfirmDialog}
                >
                    <DialogTrigger asChild>
                        <button
                            className="flex w-full cursor-default items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            onClick={() => setShowConfirmDialog(true)}
                            data-test="logout-button"
                        >
                            <LogOutIcon className="mr-2 size-5 text-muted-foreground" />
                            Log out
                        </button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Log out</DialogTitle>
                            <DialogDescription>
                                Are you sure you want to log out?
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="gap-2">
                            <Button
                                variant="secondary"
                                onClick={() => setShowConfirmDialog(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="destructive"
                                onClick={handleConfirmLogout}
                            >
                                Log out
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </DropdownMenuItem>
        </>
    );
}
