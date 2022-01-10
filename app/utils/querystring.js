import { useLocation } from "remix";

export const useQueryString = () => {
    return new URLSearchParams(useLocation().search);
}

export const setLinkQueryString = (details) => {
    let search = "";
    if (typeof details === "object") {
        for (let x in details) {
            if (details.hasOwnProperty(x)) {
                if (search.length >= 1) {
                    search += "&";
                }
                search += `${x}=${details[x]}`;
            }
        }
    }
    return `?${search}`;
}