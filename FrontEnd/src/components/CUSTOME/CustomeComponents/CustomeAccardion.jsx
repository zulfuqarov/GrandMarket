import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import { Link } from "react-router-dom";

const CustomeAccardion = () => {

    const [activeElement, setActiveElement] = useState("");

    const handleClick = (value) => {
        if (value === activeElement) {
            setActiveElement("");
        } else {
            setActiveElement(value);
        }
    };

    return (
        <div className="container mx-auto">
            <section className="pt-[80px]">

                <div id="accordionExample">
                    <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                        <h2 className="mb-0" id="headingOne">
                            <button
                                className={`font-bold !text-gray-400 ${activeElement === "element1" &&
                                    `!text-black text- [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                    } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                                type="button"
                                onClick={() => handleClick("element1")}
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Aldığınız məhsulu geri qaytarma hüququ
                                <span
                                    className={`${activeElement === "element1"
                                        ? `rotate-[-180deg] -mr-1`
                                        : `rotate-0 fill-[#212529]  dark:fill-white`
                                        } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </h2>
                        <TECollapse
                            show={activeElement === "element1"}
                            className="!mt-0 !rounded-b-none !shadow-none"
                        >
                            <div className="px-5 py-4 leading-[30px]">
                                <strong className="text-red-600 inline-block !pb-[10px]">Aldığınız məhsulu geri qaytarma hüququ
                                    .</strong> <br />
                                Mağazalardan aldığınız istənilən məhsulu 15 gün ərzində geri qaytara bilərsiniz. Bunun üçün mütləq alış-veriş qəbzi təqdim olunmalıdır. Əks halda geri qaytarma mümkün olmayacaqdır
                            </div>
                        </TECollapse>
                    </div>
                </div>
                <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="mb-0" id="headingTwo">
                        <button
                            className={`font-bold !text-gray-400 ${activeElement === "element2"
                                ? `!text-black [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element2")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Ucuz qiymətə alma hüququ
                            <span
                                className={`${activeElement === "element2"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#212529] dark:fill-white`
                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === "element2"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                    >
                        <div className="px-5 py-4 leading-[30px]">
                            <strong className="text-red-600 inline-block !pb-[10px]">Ucuz qiymətə alma hüququ.</strong> <br /> Etiketdə göstərilən qiymətlə kassa qiyməti arasında fərq olarsa, ödənişi daha aşağı olan qiymətlə edə bilərsiniz.
                        </div>
                    </TECollapse>
                </div>
                <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="accordion-header mb-0" id="headingThree">
                        <button
                            className={`font-bold !text-gray-400 ${activeElement === "element3"
                                ? `!text-black [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element3")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Təzə məhsul alma hüququ
                            <span
                                className={`${activeElement === "element3"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#212529] dark:fill-white`
                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === "element3"}
                        className="!mt-0 !shadow-none"
                    >
                        <div className="px-5 py-4 leading-[30px]">
                            <strong className="text-red-600 inline-block !pb-[10px]">Təzə məhsul alma hüququ.</strong> <br />Mağazalardan aldığınız məhsulların içərisində son istifadə müddəti keçmiş məhsul olarsa, kassa ödəniş qəbzini gətirmək şərti ilə, həmin məhsulun yenisini pulsuz ala bilərsiniz. <br />* Görmək istədiyiniz məhsulu müştəri xidmətləri stendində yazılı şəkildə təklif edə bilərsiniz.
                        </div>
                    </TECollapse>
                </div>
                <div id="accordionExample">
                    <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                        <h2 className="mb-0" id="headingOne">
                            <button
                                className={`font-bold !text-gray-400 ${activeElement === "element4" &&
                                    `!text-black text- [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                    } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                                type="button"
                                onClick={() => handleClick("element4")}
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Şikayətlərə vaxtında baxılma hüququ
                                <span
                                    className={`${activeElement === "element4"
                                        ? `rotate-[-180deg] -mr-1`
                                        : `rotate-0 fill-[#212529]  dark:fill-white`
                                        } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </h2>
                        <TECollapse
                            show={activeElement === "element4"}
                            className="!mt-0 !rounded-b-none !shadow-none"
                        >
                            <div className="px-5 py-4 leading-[35px] ">
                                <strong className="text-red-600 
inline-block !pb-[10px]">Şikayətlərə vaxtında baxılma hüququ
                                    .</strong> <br />
                                Mağazalarında sizi narahat edən hər bir məsələylə bağlı şikayətlərinizi müştəri xidmətləri stendində yazılı şəkildə bildirə bilərsiniz. <br />

                                Əlaqə nömrənizi yazdığınız təqdirdə məsələnin həlli ilə əlaqədar sizinlə qısa zamanda əlaqə saxlanılacaq. <br />

                                Mağaza işçilərindən hansısa sizə qarşı nəzakətli davranmazsa, vəzifə borclarını layiqincə yerinə yetirməzsə, həmin işçi haqda "Şikayət anketi" yazma hüququnuz vardır. Hər bir işçinin üzərində ad, soyad və vəzifəsi olan yaxa kartı vardır. Şikayət anketini dolduraraq mağazada xüsusən hazırlanmış "Şikayət Qutusu"na atın. <br />

                                Narazılığınıza səbəb olan işçinin üzərində ad, soyad və vəzifəsi göstərilən Yaxa Kartı olmadığı təqdirdə, həmin işçidən, Yaxa Kartını təqdim etməyini tələb etmə hüququnuz vardır. <br />

                                Şikayətlərinizi birbaşa "*5551 müştəri xidmətləri" nömrəsinə də bildirə bilərsiniz.
                            </div>
                        </TECollapse>
                    </div>
                </div>
                <div id="accordionExample">
                    <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                        <h2 className="mb-0" id="headingOne">
                            <button
                                className={`font-bold !text-gray-400 ${activeElement === "element5" &&
                                    `!text-black text- [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                    } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                                type="button"
                                onClick={() => handleClick("element5")}
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                İşə düzəlmək üçün hara müraciət edim?
                                <span
                                    className={`${activeElement === "element5"
                                        ? `rotate-[-180deg] -mr-1`
                                        : `rotate-0 fill-[#212529]  dark:fill-white`
                                        } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </h2>
                        <TECollapse
                            show={activeElement === "element5"}
                            className="!mt-0 !rounded-b-none !shadow-none"
                        >
                            <div className="px-5 py-4 leading-[30px] ">
                                <strong className="text-red-600 
inline-block !pb-[10px]">İşə düzəlmək üçün hara müraciət edim?
                                    .</strong> <br />
                                Rahat Marketlər şəbəkəsində Satıcı, kassir, anbar işçisi, nəzarətçi və qablaşdırıcı vakansiyaları üzrə həftənin 5 günü saat 10:00-17:00 arası olmaqla müracəit edə bilərsiniz. Əlaqə nömrəsi 012 596 56 09 / 055 909 23 99. Email: <Link className="pl-[10px] hover:text-black text-blue-500  transition-all" to="mailto:info@grandmart.az">info@grandmart.az</Link>
                            </div>
                        </TECollapse>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CustomeAccardion