// components
import Studycase from '@components/studycase';
import { StudycaseLayout } from '@components/layout';
// libraries
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { getAllStudycasesWithSlug, getStudycaseBySlug } from '@lib/api';
import { Container } from '@lib/ui';

export async function getStaticPaths() {
  const allStudycases = await getAllStudycasesWithSlug();

  return {
    paths: allStudycases?.map(({ slug }) => `/studycase/${slug}`) || [],
    fallback: true,
  };
}

export async function getStaticProps({
  params,
  preview = false,
}: GetStaticPropsContext) {
  const studycase = await getStudycaseBySlug(params?.studycase, preview);

  return {
    props: { studycase },
  };
}

export default function StudycasePage({
  studycase,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!router.isFallback && !studycase?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <Container maxW='87.5%'>
          <div>Loading...</div>
        </Container>
      ) : (
        <Studycase data={studycase} />
      )}
    </>
  );
}

StudycasePage.Layout = StudycaseLayout;
