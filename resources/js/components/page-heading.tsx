import { Heading as NewHeading } from '@/components/Heading';
import { Text } from '@/components/Text';

export default function Heading({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    return (
        <div className="mb-8 space-y-0.5">
            <NewHeading as="h2" size="xl" weight="semibold">
                {title}
            </NewHeading>
            {description && (
                <Text size="sm" color="muted">
                    {description}
                </Text>
            )}
        </div>
    );
}
