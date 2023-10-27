import type { LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Form, useLoaderData, useParams } from "@remix-run/react";
import { db } from '~/utils/db.server';

export function loader({ params }: LoaderArgs) {
  const data = db.comment.findMany({
    where: {
      movieId: params.id
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return json({ data })
}
export default function Comments() {
  const { id } = useParams()

  const { data } = useLoaderData<typeof loader>()
  return (
    <div className="rounded-lg border p-3">
      <h1 className="text-xl font-semibold text-center mb-5">Tu opinión</h1>
      <div>
        <Form method="POST">
          <textarea name="comment" className="w-full border border-teal-500 rounded-lg p-2"></textarea>
          <input type="hidden" name="id" value={id} />
          <button type="submit" className="bg-teal-500 px-4 py-2 rounded-lg text-white w-full">Enviar</button>
        </Form>
        <div className="mt-5 flex flex-col gap-y-3">
          {
            data.map((comment: any) => (
              <div key={comment.id} className="flex flex-col gap-y-1">
                <span className="font-semibold">{comment.user}</span>
                <span>{comment.comment}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}