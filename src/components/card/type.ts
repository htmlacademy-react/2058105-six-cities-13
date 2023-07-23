export type CardProps = {
    id: string;
    title: string;
    price: number;
    type: string;
    previewImage: string;
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