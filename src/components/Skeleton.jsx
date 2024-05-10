export default function Skeleton({length, cols}) {
  return (
    <>
    <div className={`grid grid-cols-${cols} gap-6`}>
      {Array.from({ length: length }).map((_, index) => (
        <div key={index} className="border shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex flex-col">
            <div className="bg-gray-200 w-full h-52 rounded-lg"></div>
            <div className="flex-1 space-y-6 py-3">
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-200 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}