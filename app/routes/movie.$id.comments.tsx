import type { ActionArgs, LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Form, useLoaderData, useParams, useTransition } from "@remix-run/react";
import { useEffect, useRef } from 'react';
import { db } from '~/utils/db.server';



export async function loader({ params }: LoaderArgs) {
  const data = await db.comment.findMany({
    where: {
      movieId: params.id
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  return json({ data })
}


export async function action({ request }: ActionArgs) {
  const formData = await request.formData()

  if (!formData.has("comment") || formData.get("comment") === "") {
    return new Response("Missing comment", {
      status: 400,
    })
  }

  const data = await db.comment.create({
    data: {
      message: formData.get("comment") as string,
      movieId: formData.get("id") as string,
    }
  })
  return json({ data })
}

export default function Comments() {
  const { id } = useParams()
  const { data } = useLoaderData<typeof loader>()
  let transition = useTransition()
  let busy = transition.state === "submitting"
  const formRef = useRef<HTMLFormElement>(null)

  const readableDateWithTime = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  })

  useEffect(() => {
    if (!busy) {
      formRef.current?.reset()
    }
  }, [busy])

  return (
    <div className="rounded-lg border p-3">
      <h1 className="text-xl font-semibold text-center mb-5">Tu opinión</h1>
      <div>
        <Form method="POST" ref={formRef}>
          <textarea name="comment" className="w-full border border-teal-500 rounded-lg p-2"></textarea>
          <input type="hidden" name="id" value={id} />
          <button type="submit" disabled={busy} className="bg-teal-500 px-4 py-2 rounded-lg text-white w-full">
            {busy ? "Enviando..." : "Enviar comentario"}
          </button>
        </Form>
        <div className="mt-5 flex flex-col gap-y-3">
          {
            data.map((comment: any) => (
              <div key={comment.id} className="flex flex-row mb-3">
                <span>{comment.message}</span>
                <span className="mx-2">-</span>
                <small className="font-semibold">{readableDateWithTime}</small>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}