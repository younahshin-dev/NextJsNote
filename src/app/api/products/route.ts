import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";
//일반적으로 API Routes에서는 export dafult 함수가 아니라 export 함수 를 사용한다 => default를 지우고 export async function GET으로 변경
export  async function GET(request: Request) { 
  const products = await getProducts();
  return NextResponse.json({ products });
}