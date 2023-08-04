export type CardProps = {
    id: string;
    title: string;
    price: number;
    type: string;
    previewImage?: string;
    isFavorite: boolean;
    isPremium?: boolean;
    rating: number;
    city: {
        name: string;
        location: {
            latitude: number;
            longitude: number;
            zoom: number;
        };
    };
    location: {
        latitude: number;
        longitude: number;
        zoom: number;
    };
}

export type FullCardProps = CardProps & {
    description: string;
    bedrooms: number;
    goods: string[];
    host: {
        name: string;
        avatarUrl: string;
        isPro: boolean;
    };
    images: string[];
    maxAdults: number;
}
