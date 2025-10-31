import { Heading } from '@/components/Heading';
import { Text } from '@/components/Text';

export default function HeadingSmall({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    return (
        <header>
            <Heading as="h3" size="base" weight="medium" className="mb-0.5">
                {title}
            </Heading>
            {description && (
                <Text size="sm" color="muted">
                    {description}
                </Text>
            )}
        </header>
    );
}
