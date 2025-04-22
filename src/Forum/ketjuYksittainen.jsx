{/*Yksittäinen keskustelu ketju -  Jani*/}

import React, { useEffect, useState } from "react";
import EditThreadForm from "./muokkaaKetjua";
import EditReplyForm from "./muokkaaVastausta";
import { fetchThread, fetchReplies, createReply, deleteReply, deleteThread, editReply} from "./services/ForumService";
import { useParams } from "react-router-dom";
import { fetchWithAuth } from "../api";

const ThreadView = () => {
    const { threadId } = useParams();
    const [thread, setThread] = useState({});
    const [replies, setReplies] = useState([]);
    const [newReply, setNewReply] = useState("");
    const [userId, setUserId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
    const [editThread, setEditThread] = useState(null);
    const [editingReplyId, setEditingReplyId] = useState(null);
    const [editingReplyContent, setEditingReplyContent] = useState("");
    
    console.log("YksittäinenKetju");

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetchWithAuth("https://projekti2025backend-e0dubhd7e5h6akcw.swedencentral-01.azurewebsites.net/api/profile/", {
                    method: "GET",
                    credentials: "include",
                });

                if (response.ok) {
                    const userData = await response.json();
                    setUserId(userData.id); 
                    console.log("Käyttäjä:", userData.id);
                } else {
                    console.warn("Käyttäjä ei ole kirjautunut");
                    
                }
            } catch (error) {
                console.error("Virhe käyttäjän tunnistamisessa:", error);
                }
        };

        checkAuth();
    }, []); 

    useEffect(() => {

        const getThreadData = async () => {
            try {
                const threadData = await fetchThread(threadId);
                console.log("Haettu ketju:", threadData)
                setThread(threadData);

                const replyData = await fetchReplies(threadId);
                setReplies(replyData);
            } catch (error) {
                console.error("Virhe tietojen haussa:", error);
            }
        };

        getThreadData();
    }, [threadId]);


    //Vastauksen luonti
    const handleReplySubmit = async (e) => {
        e.preventDefault();
        if (newReply.trim() === "" || userId === null || isSubmitting) return;

        setIsSubmitting(true);
        const replyData = { content: newReply, ketju: threadId, replier: userId };

        try {
            const createdReply = await createReply(replyData);
            setReplies([...replies, createdReply]);
            setNewReply("");
        } catch (error) {
            console.error("Virhe vastauksen lähettämisessä:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const onThreadUpdated = () => {
        const getThreadData = async () => {
            try {
                const threadData = await fetchThread(threadId);
                setThread(threadData);
    
                const replyData = await fetchReplies(threadId);
                setReplies(replyData);
            } catch (error) {
                console.error("Virhe tietojen haussa:", error);
            }
        };
    
        getThreadData();
        setEditThread(null); // Sulje muokkausmodaali
    };

        // Vastauksen muokkauksen tallennus
        const handleSaveEditedReply = async (replyId, newContent) => {
        
            if (!newContent || newContent.trim() === "") {
                alert("Vastaus ei voi olla tyhjä.");
                return;
            }
    
            try {
                const updatedReplyData = { content: newContent };
                await editReply(replyId, newContent); 
    
                // Päivitetään replies-tila paikallisesti
                setReplies(
                    replies.map((reply) => {
                        if (reply.id === replyId) {
                   
                            return { ...reply, content: newContent };
                        }
                        return reply; 
                    })
                );
    
             
                setIsReplyModalOpen(false);
                setEditingReplyId(null);
                setEditingReplyContent("");
                // alert("Vastaus päivitetty!");
    
            } catch (error) {
                console.error("Virhe vastauksen muokkauksessa:", error);
                alert("Virhe vastauksen päivittämisessä."); 
            }
        };

    //Ketjun poisto
    const handleDeleteThread = async () => {
        const confirmDelete = window.confirm("Haluatko varmasti poistaa ketjun?");
        if (!confirmDelete) return;
    
        try {
            await deleteThread(threadId);
            alert("Ketju poistettu onnistuneesti.");
            // uudelleen ohjaus etusivulle tai aiheeseen
            window.location.href = "/"; // `/aiheet/${thread.topic.id}`
        } catch (error) {
            alert("Virhe ketjun poistossa.");
        }
    };


    //Vastauksen poisto
    const handleDeleteReply = async (replyId) => {
        try {
            await deleteReply(replyId);
            setReplies(replies.filter(reply => reply.id !== replyId));
        } catch (error) {
            console.error("Virhe vastauksen poistossa:", error);
        }
    };

    return (
        <>
            {/* Page background */}
            <div className="pt-24 pb-10 min-h-screen bg-black text-white">

                {/* Centered card */}
                <div className="max-w-7xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-600 shadow-lg">

                    {/* Thread header */}
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold !text-blue-400 mb-6">{thread.header}</h2>
                        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center bg-gray-700 p-4 rounded-lg shadow-md">
                            <p className="text-gray-300 mb-4 md:mb-0">{thread.content}</p>
                            <div className="flex items-center space-x-2">
                                <p className="text-gray-400 text-sm">Kirjoittaja: {thread.author?.username && thread.author.username.trim() !== ""
                                    ? thread.author.username
                                    : "Forumin käyttäjä"}
                                </p>
                                {userId && thread.author && userId === thread.author.id && (
                                    <>
                                        <button
                                            onClick={() => setEditThread(thread)}
                                            className="!bg-gray-700 hover:!bg-gray-600 text-white px-3 py-1 rounded text-sm"
                                        >
                                            Muokkaa
                                        </button>
                                        <button
                                            onClick={handleDeleteThread}
                                            className="!bg-red-600 hover:!bg-red-700 text-white px-3 py-1 rounded text-sm ml-2"
                                        >
                                            Poista
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Replies Section */}
                    <div className="bg-gray-700 p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-2xl font-semibold !text-blue-400 mb-4">Vastaukset</h3>
                        <ul className="space-y-6">
                            {replies.length > 0 ? (
                                replies.map((reply) => (
                                    <li key={reply.id} className="border-b border-gray-600 pb-4">
                                        <div className="flex flex-col md:flex-row md:justify-between items-start">
                                            <div>
                                                <p className="text-gray-400">
                                                    Kirjoittaja: {reply.replier?.username && reply.replier.username.trim() !== ""
                                                        ? reply.replier.username
                                                        : "Forumin käyttäjä"}
                                                </p>
                                                <p className="text-gray-300 mt-1">{reply.content}</p>
                                                <p className="text-gray-500 text-xs mt-1">
                                                    Luotu: {new Date(reply.created).toLocaleString()}
                                                </p>
                                            </div>

                                            {/* Näytä muokkaus- ja poistonapit vian jos käyttäjä on kirjoittaja */}
                                            {userId === reply.replier?.id && editingReplyId !== reply.id && (
                                                <div className="flex space-x-2 mt-4 md:mt-0">
                                                    <button
                                                        onClick={() => {
                                                            setEditingReplyId(reply.id);
                                                            setEditingReplyContent(reply.content);
                                                            setIsReplyModalOpen(true);
                                                        }}
                                                        className="text-sm px-3 py-1 rounded !bg-gray-700 hover:!bg-gray-600 text-white"
                                                    >
                                                        Muokkaa
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteReply(reply.id)}
                                                        className="text-sm px-3 py-1 rounded !bg-red-600 hover:!bg-red-700 text-white"
                                                    >
                                                        Poista
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <p className="text-gray-400 text-center">Ei vielä vastauksia.</p>
                            )}
                        </ul>
                    </div>

                    {/* New reply form */}
                    {userId !== null && (
                        <form onSubmit={handleReplySubmit} className="bg-gray-700 p-6 rounded-lg shadow-md">
                            <textarea
                                value={newReply}
                                onChange={(e) => setNewReply(e.target.value)}
                                placeholder="Kirjoita vastaus..."
                                className="w-full p-2 mb-4 text-gray-900 bg-white rounded-md border-none"
                                rows="3"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full !bg-blue-500 hover:!bg-blue-600 text-white px-4 py-2 rounded-md transition"
                            >
                                Lähetä uusi vastaus
                            </button>
                        </form>
                    )}

                </div>
            </div>

            {/*Uuden ketjun luonti modaali*/}
            {isModalOpen && (
                <NewThreadForm
                    topicId={thread.id}
                    userId={userId}
                    closeModal={() => setIsModalOpen(false)}
                    onThreadCreated={fetchData}
                />
            )}

            {/*Ketjun muokkaus lomake*/}
            {editThread && (
                <EditThreadForm
                    thread={editThread}
                    userId={userId}
                    onUpdate={onThreadUpdated}
                    onClose={() => setEditThread(null)}
                />
            )}

            {isReplyModalOpen && (
                <EditReplyForm
                    replyId={editingReplyId}
                    initialContent={editingReplyContent}
                    onSave={(newContent) => handleSaveEditedReply(editingReplyId, newContent)}
                    onCancel={() => {
                        setIsReplyModalOpen(false);
                        setEditingReplyId(null);
                        setEditingReplyContent("");
                    }}
                />
            )}
        </>
    );
};

export default ThreadView;