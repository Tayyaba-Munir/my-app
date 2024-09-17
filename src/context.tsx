'use client'
import { createContext } from "react";

interface Cart{
    [key: string]:any;
}
export const CartContext= createContext({}as Cart)