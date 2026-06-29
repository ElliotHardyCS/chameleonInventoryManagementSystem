interface notice {
    noticeId: string;
    noticeBody: string;
    sender: string;
    noticeDate: string;
}

export default function NoticeCard({noticeId, noticeBody, sender, noticeDate}:notice) {
    return (
        <main className = "flex flex-row bg-[#323232] items-center space-x-5 w-400 justify-between rounded px-10">

        </main>
    );
}