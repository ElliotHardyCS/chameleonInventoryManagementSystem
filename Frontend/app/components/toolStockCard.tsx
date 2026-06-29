interface tool {
    toolId: string;
    name: string;
    quantity: number;
    location: string;
    condition: string;
    assignedTo: string;
    ownedBy: string;
    category: string;
}

export default function costumeCard({toolId, name, quantity, location, condition, assignedTo, ownedBy, category} : tool) {

    return (
        <main className = "flex flex-row bg-[#323232] items-center space-x-5 w-400 justify-between rounded px-10">

            <img src = "./logos/STARLIGHT_LOGO.svg" className = "h-25"/>

            <p className = "text-white text-1xl">
                {toolId} | {name} | {quantity} | {category} | {assignedTo}
            </p>

        </main>
    );
}