import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">Total Payments : {payments.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra my-8">
                        {/* head */}
                        <thead className="font-bold text-black bg-orange-600">
                            <tr>
                                <th>Email</th>
                                <th>Total Price</th>
                                <th>Transaction Id</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map(payment => <tr key={payment._id}>
                                    <td>{payment.email}</td>
                                    <td>$ {payment.price}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.date}</td>
                                    <td>{payment.status}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;