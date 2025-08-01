"use client";

import {OrderListItem} from "@/components/orders/orderListItem";
import {formatPrice} from "@/components/orders/format";
import {Order} from "@/types/dev/order";

export function OrderSummary(
    {order, amounts }:
    {
        order : Order;
        amounts: {[key: string]: number}
    }
) {
    return (
        <div className="text-right">
            <h3 className="text-lg font-semibold mb-2">결제 금액</h3>
            <div className="space-y-1 text-sm">
                {order.orderItems && order.orderItems.length > 0 ? (
                    order.orderItems.map((item, idx) => (
                        <OrderListItem key={idx} item={item} />
                    ))
                ) : (
                    <div className="flex justify-between">
                        <span>상품 정보 없음</span>
                        <span>0 원</span>
                    </div>
                )}
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-xl">
                    <div>
                        <span>총</span>
                        <span className="px-3">{amounts[order.id] || 0} 개</span>
                    </div>
                    <span>{formatPrice(order.totalPrice)} 원</span>
                </div>
            </div>
        </div>
    )
}