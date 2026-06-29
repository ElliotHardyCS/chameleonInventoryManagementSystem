interface prop {
    propId: string;
    name: string;
    variant: string;
    quantity: number;
    locationCode: string;
    cost: string;
}

export default function costumeCard({propId, name, variant, quantity, locationCode, cost} : prop) {

    return (
        <main className = "flex flex-row bg-[#323232] items-center space-x-5 w-400 justify-between rounded px-10">

            <img src = "./logos/STARLIGHT_LOGO.svg" className = "h-25"/>

            <p className = "text-white text-1xl">
                {propId} | {name} | {variant} | {quantity}
            </p>

        </main>
    );
}