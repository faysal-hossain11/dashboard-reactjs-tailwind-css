/* eslint-disable react/prop-types */

const DashboardCard = ({ title, persentage, count, icon, bgColor, textColor}) => {
    return (
        <div className={`w-full rounded-md p-6 shadow-md h-fit hover:shadow-lg hover:cursor-pointer transition-all duration-200 ${bgColor}`}>
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-semibold">{title}</h3>
                <span className={`${textColor} font-semibold`}>{persentage}</span>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-semibold mb-1">{count}</h2>
                    <span className="">Followers</span>
                </div>
                <span className={`text-3xl rounded-b-full ${textColor}`}>{icon}</span>
            </div>
        </div>
    );
};

export default DashboardCard;